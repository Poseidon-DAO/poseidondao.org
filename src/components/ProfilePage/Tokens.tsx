import { Colors } from 'components/UI_KIT/colors';
import { Button } from 'reactstrap'

interface TokensProps {
  balance: string;
  totalSupply: string;
  account: string;
}

export default function Tokens({ balance, totalSupply, account  }: TokensProps) {

  return (
    <div>
      <p style={{ alignSelf: 'flex-end', color: Colors.white.primary }}>Available tokens: <span style={{ fontWeight: 400 }}>{balance}</span></p>
      <p style={{ alignSelf: 'flex-end', color: Colors.white.primary }}>Current token supply: <span style={{ fontWeight: 400 }}>{totalSupply}</span></p>
      <Button onClick={() => alert(account + " has claimed its tokens.")}>Claim your tokens now!</Button>
    </div>
  )
}
