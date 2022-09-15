import styled from "styled-components";
import { Form, FormGroup } from "reactstrap";
import { useCallback, useEffect, useState } from "react";
import { IMAGE_ARRAY } from "../../../public/img/collection";
import { Colors } from "components/UI_KIT/colors";
import Decimal from "decimal.js-light";
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from "smartContract";
import { useMoralis } from "react-moralis";
import { Alert, Heading } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import Actions from "redux/actions";
import { RootState } from "redux/reducers";
import { formatLongNumber } from "utils";

const MAX_ELEMENTS_CAP = 10;

interface BurnProps {
  ratio: number;
}

export default function Burn({ ratio }: BurnProps) {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [hoverImage, setHoverImage] = useState(-1);
  const [showPendingToast, setShowPendingToast] = useState(false);
  const [error, setError] = useState(false);
  const userBalance = useSelector(
    (state: RootState) => state.wallet.wallet.balance
  );

  const balance = new Decimal(userBalance ?? "0");
  const availableToBurn =
    balance != null && ratio != null && ratio != 0
      ? balance.div(ratio).toNumber()
      : 0;

  const dispatch = useDispatch();
  const setSuccessfulTransaction = useCallback(
    (hash: string) =>
      dispatch(Actions.WalletActions.setSuccessfulHashTransaction(hash)),
    [dispatch]
  );

  const { account, Moralis } = useMoralis();

  const clearAmounts = () => {
    setSelectedAmount(0);
    setHoverImage(-1);
  };

  const renderNftButton = (i: number) => {
    return (
      <NftButton
        isSelected={selectedAmount === i}
        key={i}
        onClick={() => setSelectedAmount(i)}
        onMouseEnter={() => setHoverImage(i)}
        onMouseLeave={() => setHoverImage(-1)}
      >
        <BackgroundNFT
          backgroundImage={IMAGE_ARRAY[i].src}
          isSelected={selectedAmount === i}
          isHovered={hoverImage === i}
        />
        <Heading zIndex={10} color="white" fontSize={"4rem"} padding={"1rem"}>
          {i}
        </Heading>
      </NftButton>
    );
  };

  const burnNFTS = async () => {
    const options = ERC20Options(account!!, SMART_CONTRACT_FUNCTIONS.BURN, {
      _amount: new Decimal(selectedAmount).mul(ratio).toNumber(),
    });
    const burn = await Moralis.executeFunction(options);
    if (burn.hash) {
      setShowPendingToast(true);
      setSuccessfulTransaction(burn.hash);
      clearAmounts();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    if (showPendingToast) {
      setTimeout(() => {
        setShowPendingToast(false);
      }, 5000);
    }
  }, [showPendingToast]);

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label>
            Become part of the Poseidon DAO family by getting voting rights:
          </Label>
          <p
            style={{
              alignSelf: "flex-end",
              color: Colors.white.primary,
              marginBottom: "1px",
            }}
          >
            Available PDN:{" "}
            <span style={{ fontWeight: 400 }}>
              {formatLongNumber(balance.toNumber())}
            </span>
          </p>
          {Math.floor(availableToBurn) !== 0 && (
            <p style={{ alignSelf: "flex-end", color: Colors.white.primary }}>
              You can acquire up to:{" "}
              <span style={{ fontWeight: 400 }}>{Number(availableToBurn)}</span>{" "}
              NFTs
            </p>
          )}
          <div>
            {Math.floor(availableToBurn) !== 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    ...Array(
                      Math.min(MAX_ELEMENTS_CAP, Math.floor(availableToBurn))
                    ),
                  ].map((_, index) => {
                    const i = index + 1;
                    if (i > 10 && i < 30) {
                      if (i % 5 === 0) return renderNftButton(i);
                      else return false;
                    } else if (i > 30) {
                      if (i % 10 === 0) return renderNftButton(i);
                      else return false;
                    } else return renderNftButton(i);
                  })}
                </div>
                <Heading color="white">
                  You are going to burn: {selectedAmount * ratio} PDN
                </Heading>
                <Heading color="white">
                  Receiving: {selectedAmount} NFTs
                </Heading>
                <div>
                  {availableToBurn !== 0 ? (
                    <Button
                      disabled={selectedAmount !== 0}
                      onClick={burnNFTS}
                      style={{ marginBottom: "1rem" }}
                    >
                      <p>BURN</p>
                    </Button>
                  ) : (
                    <h4
                      style={{ color: Colors.red.warning, marginTop: "1rem" }}
                    >
                      You don't have enough funds to Mint our NFTs
                    </h4>
                  )}
                </div>
              </>
            ) : (
              <p
                style={{
                  alignSelf: "flex-end",
                  color: Colors.white.primary,
                  marginTop: "2rem",
                }}
              >
                You don't have enough PDN to burn.
              </p>
            )}
          </div>
        </FormGroup>
      </Form>
      {showPendingToast && (
        <Alert
          style={{
            position: "fixed",
            bottom: "10px",
            zIndex: 100,
            right: "10px",
            maxWidth: "40%",
            cursor: "pointer",
            paddingRight: "1rem",
          }}
          intent="info"
          title="Thank you! You will see a notification when the transaction is confirmed."
          marginBottom={32}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 50vw;
  height: 100%;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const SuccessContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.h4`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const NftButton = styled.div<{ isSelected: boolean }>`
  transform: ${(props) => (props.isSelected ? "scale(1.1)" : "scale(1)")};
  color: white;
  font-size: 1em;
  margin: 1em;
  margin-left: 0rem;
  height: 150px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1px solid lightgrey;
  border-radius: 3px;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
    cursor: pointer;
  }
`;

const BackgroundNFT = styled.div<{
  isSelected: boolean;
  backgroundImage: string;
  isHovered: boolean;
}>`
  opacity: ${(props) => (props.isHovered || props.isSelected ? 1 : 0.2)};
  z-index: 0;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Button = styled.div<{ disabled: boolean }>`
  width: fit-content;
  background: ${(props) =>
    props.disabled ? "transparent" : Colors.blue.ocean};
  color: ${(props) => (props.disabled ? "white" : "grey")};
  font-size: 1em;
  margin-top: 1rem;
  padding: 0.5em 1em;
  border: ${(props) => (props.disabled ? "0.1px solid lightgrey" : "none")};
  border-radius: 3px;
  &:hover {
    transform: ${(props) => (props.disabled ? "scale(0.98)" : "")};
    background-color: ${(props) => (props.disabled ? Colors.blue.clear : "")};
    transition: background-color 0.2s;
    cursor: ${(props) => (props.disabled ? "pointer" : "default")};
  }
`;
