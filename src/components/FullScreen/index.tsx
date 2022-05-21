import { Pane } from "evergreen-ui";

const FullScreen = ({ children }: { children: React.ReactNode }) => (
  <Pane
    height='100vh' 
    width='100vw' 
    display="flex" 
    margin={0} 
    alignItems="center" 
    backgroundColor='#202249'
    justifyContent="center"
    overflow='hidden'
  >
    {children}
  </Pane>
);

export default FullScreen;