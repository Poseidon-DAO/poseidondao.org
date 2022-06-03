import styled from 'styled-components'
import { Form, FormGroup } from 'reactstrap'
import { useState } from 'react';
import { IMAGE_ARRAY } from '../../../public/img/collection';
import { Colors } from 'components/UI_KIT/colors';

interface BurnProps {
  availableBalance: string;
  account: string;
}

export default function Burn({ availableBalance }: BurnProps) {
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [hoverImage, setHoverImage] = useState(0)
  const availableToBurn = Math.floor(Number(availableBalance) / Number(process.env.NEXT_PUBLIC_REQUIRED_BURN))

  const renderNftButton = (i: number) => (
    <NftButton
      backgroundImage={IMAGE_ARRAY[hoverImage].src}
      onMouseEnter={() => setHoverImage(Math.floor(Math.random() * IMAGE_ARRAY.length))}
      key={i}
      onClick={() => setSelectedAmount(i)}
      isSelected={selectedAmount === i}>{i}</NftButton>
  )
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label>
            Become part of the Poseidon DAO family by getting voting rights:
          </Label>
          <p style={{ alignSelf: 'flex-end', color: Colors.white.primary, marginBottom: '1px' }}>Available PDN: <span style={{ fontWeight: 400 }}>{parseFloat(Number(availableBalance).toFixed(8))}</span></p>
          {availableToBurn !== 0 && <p style={{ alignSelf: 'flex-end', color: Colors.white.primary }}>You can acquire up to: <span style={{ fontWeight: 400 }}>{Number(availableToBurn)}</span> NFTs</p>}
          <div style={{ display: 'flex', alignItems: 'center', maxWidth: '100%', flexWrap: 'wrap' }}>
            {[...Array(availableToBurn)].map((props, index) => {
              const i = index + 1;
              if (i > 10 && i < 30) {
                if (i % 5 === 0) return renderNftButton(i)
                else return false
              }
              else if (i > 30) {
                if (i % 10 === 0) return renderNftButton(i)
                else return false
              } 
              else return renderNftButton(i)
              }
            )}
          </div>
            {availableToBurn !== 0 ? 
            <Button disabled={selectedAmount !== 0} onClick={() => alert(`You selected ${selectedAmount}`)}>
              <p>BURN</p>
            </Button> : 
            <h4 style = {{ color: Colors.red.warning }}>You don't have enough funds to Mint our NFTs</h4>
            }
        </FormGroup>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  width: 50vw;
  height: 100%;
  @media (max-width: 768px) {
    width: 90vw;
  }
`

const Label = styled.h4`
  color: #fff;
  margin-bottom: .5rem;
`

const NftButton = styled.div<{isSelected: boolean, backgroundImage: string}>`
  background: transparent;
  background: ${props => props.isSelected ? Colors.blue.ocean : 'transparent'};
  transform: ${props => props.isSelected ? 'scale(1.1)' : 'scale(1)'};
  color: white;
  font-size: 1em;
  margin: 1em;
  height: 80px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1px solid lightgrey;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:hover {
    transform: scale(1.2);
    background-image: ${props => !props.isSelected && `url(${props.backgroundImage})`};
    transition: background-color 0.1s;
    cursor: pointer;
  }
`

const Button = styled.div<{disabled: boolean}>`
  width: fit-content;
  background: ${props => props.disabled ? "transparent" : Colors.blue.ocean};
  color: ${props => props.disabled ? "white" : "grey"};
  font-size: 1em;
  margin-top: 1rem;
  padding: 0.5em 1em;
  border: ${props => props.disabled ? '0.1px solid lightgrey' : 'none'};
  border-radius: 3px;
  &:hover {
    transform: ${props => props.disabled ? 'scale(0.98)' : ''};
    background-color: ${props => props.disabled ? Colors.blue.clear : ''};
    transition: background-color 0.2s;
    cursor: ${props => props.disabled ? 'pointer' : 'default'};
  }
`