import { Form, FormGroup } from "reactstrap";
import { useEffect, useState } from "react";
import { IMAGE_ARRAY } from "../../../public/img/collection";
import { Colors } from "components/UI_KIT/colors";
import Decimal from "decimal.js-light";
import { ERC20Options, SMART_CONTRACT_FUNCTIONS_NAMES } from "contracts/utils";
import { Alert, Heading } from "evergreen-ui";
import { formatLongNumber } from "utils";
import { useAccount } from "wagmi";
import { usePDNBalance } from "lib/hooks";
import { Box, Button, Text } from "@chakra-ui/react";

const MAX_ELEMENTS_CAP = 10;

interface BurnProps {
  ratio: number;
}

export default function Burn({ ratio }: BurnProps) {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [hoverImage, setHoverImage] = useState(-1);
  const [showPendingToast, setShowPendingToast] = useState(false);
  const [error, setError] = useState(false);
  // const userBalance = useSelector(
  //   (state: RootState) => state.wallet.wallet.balance
  // );

  // const balance = new Decimal(userBalance ?? "0");

  const { balance } = usePDNBalance();

  const availableToBurn =
    balance != null && ratio != null && ratio != 0 ? ratio : 0;

  // const dispatch = useDispatch();
  // const setSuccessfulTransaction = useCallback(
  //   (hash: string) =>
  //     dispatch(Actions.WalletActions.setSuccessfulHashTransaction(hash)),
  //   [dispatch]
  // );

  const { address } = useAccount();

  const clearAmounts = () => {
    setSelectedAmount(0);
    setHoverImage(-1);
  };

  const renderNftButton = (i: number) => {
    return (
      <Button
        key={i}
        onClick={() => setSelectedAmount(i)}
        onMouseEnter={() => setHoverImage(i)}
        onMouseLeave={() => setHoverImage(-1)}
      >
        <Box
          __css={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 0,
            opacity: hoverImage === i ? 1 : 0.2,
            backgroundImage: `url(${IMAGE_ARRAY[i].src})`,
            "&:hover": { opacity: 1, cursor: "pointer" },
          }}
        />
        <Heading zIndex={10} color="white" fontSize={"4rem"} padding={"1rem"}>
          {i}
        </Heading>
      </Button>
    );
  };

  const burnNFTS = async () => {
    const options = ERC20Options(
      address!!,
      SMART_CONTRACT_FUNCTIONS_NAMES.BURN,
      {
        _amount: new Decimal(selectedAmount).mul(ratio).toNumber(),
      }
    );
    // const burn = await Moralis.executeFunction(options);
    // if (burn.hash) {
    //   setShowPendingToast(true);
    //   // setSuccessfulTransaction(burn.hash);
    //   clearAmounts();
    // } else {
    //   setError(true);
    // }
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
    <Box w={{ base: "90vh", md: "50vw" }} h="100%" color="white">
      <Form>
        <FormGroup>
          <Text mt="0.5rem">
            Become part of the Poseidon DAO family by getting voting rights:
          </Text>
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

                  <Heading color="white">
                    You are going to burn: {selectedAmount * ratio} PDN
                  </Heading>
                  <Heading color="white">
                    Receiving: {selectedAmount} NFTs
                  </Heading>
                </div>
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
    </Box>
  );
}
