import styled from "styled-components";
import { Form, FormGroup } from "reactstrap";
import { useEffect, useState } from "react";
import { IMAGE_ARRAY } from "../../../public/img/collection";
import { Colors } from "components/UI_KIT/colors";
import Decimal from "decimal.js-light";
import SMART_CONTRACT_FUNCTIONS, { ERC20Options } from "smartContract";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Alert, Heading } from "evergreen-ui";
import LoadingModal from "components/LoadingModal";
import SuccessAnimation from "components/SuccessAnimation";

const MAX_ELEMENTS_CAP = 10;

type chainList = "eth" | "0x1" | "rinkeby" | "0x4";

interface BurnProps {
  availableBalance: number;
  ratio: number;
  onBurn: () => void;
}

export default function Burn({ availableBalance, ratio, onBurn }: BurnProps) {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [hoverImage, setHoverImage] = useState(-1);
  const balance = new Decimal(availableBalance);
  const availableToBurn = balance.div(ratio).toNumber();
  const [loadingBurn, setLoadingBurn] = useState(false);
  const [successfulTransaction, setSuccessfulTransaction] = useState("");
  const [queryCounter, setQueryCounter] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { data, fetch } = useMoralisQuery(
    "burnAndReceiveNFT",
    (query) => query.equalTo("transaction_hash", successfulTransaction),
    [successfulTransaction.length, queryCounter]
  );

  const { account, Moralis } = useMoralis();

  useEffect(() => {
    if (successfulTransaction.length) setQueryCounter(queryCounter + 1);
  }, [successfulTransaction.length]);

  useEffect(() => {
    if (successfulTransaction.length) {
      if (!data.length && queryCounter > 0) {
        setTimeout(() => {
          fetch();
        }, 2000);
      } else {
        setQueryCounter(0);
        setLoadingBurn(false);
        setShowSuccess(true);
      }
    }
  }, [data, queryCounter]);

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
        setSuccessfulTransaction("");
        clearAmounts();
        onBurn();
      }, 4000);
    }
  }, [showSuccess]);

  const clearAmounts = () => {
    setSelectedAmount(0);
    setHoverImage(-1);
  };

  const navigateToHash = () => {
    if (successfulTransaction.length) {
      const url = `https://${process.env.NEXT_PUBLIC_CHAIN}.etherscan.io/tx/${successfulTransaction}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
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
    setLoadingBurn(true);
    if (burn.hash) {
      setSuccessfulTransaction(burn.hash);
    }
  };

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
            <span style={{ fontWeight: 400 }}>{balance.toString()}</span>
          </p>
          {availableToBurn !== 0 && (
            <p style={{ alignSelf: "flex-end", color: Colors.white.primary }}>
              You can acquire up to:{" "}
              <span style={{ fontWeight: 400 }}>{Number(availableToBurn)}</span>{" "}
              NFTs
            </p>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "100%",
              flexWrap: "wrap",
            }}
          >
            {availableToBurn !== 0 &&
              [...Array(Math.min(MAX_ELEMENTS_CAP, availableToBurn))].map(
                (_, index) => {
                  const i = index + 1;
                  if (i > 10 && i < 30) {
                    if (i % 5 === 0) return renderNftButton(i);
                    else return false;
                  } else if (i > 30) {
                    if (i % 10 === 0) return renderNftButton(i);
                    else return false;
                  } else return renderNftButton(i);
                }
              )}
          </div>
          <Heading color="white">
            You are going to burn: {selectedAmount * ratio} PDN
          </Heading>
          <Heading color="white">Receiving: {selectedAmount} NFTs</Heading>
          {availableToBurn !== 0 ? (
            <Button
              disabled={selectedAmount !== 0}
              onClick={burnNFTS}
              style={{ marginBottom: "1rem" }}
            >
              <p>BURN</p>
            </Button>
          ) : (
            <h4 style={{ color: Colors.red.warning, marginTop: "1rem" }}>
              You don't have enough funds to Mint our NFTs
            </h4>
          )}
        </FormGroup>
      </Form>
      {loadingBurn && (
        <LoadingModal
          white
          text="Please wait while we confirm your if transaction came through."
        />
      )}
      {showSuccess && (
        <>
          <SuccessContainer>
            <SuccessAnimation />
          </SuccessContainer>
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
            intent="success"
            title={`Successfully burned ${selectedAmount} NFTs, transaction hash: ${successfulTransaction.slice(
              0,
              6
            )}...${successfulTransaction.slice(-6)}`}
            marginBottom={32}
            onClick={navigateToHash}
          />
        </>
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
