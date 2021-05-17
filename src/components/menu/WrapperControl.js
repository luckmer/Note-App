import { useContext, useCallback } from "react";
import { StoreContext } from "../../utils/Store";
import * as _ from "../../style/components/WrapperControl";

function WrapperControl() {
  const { MENU } = useContext(StoreContext);
  const { ref, openMenu, setOpenMenu, x, y } = MENU;

  const handleClick = useCallback(() => {
    setOpenMenu(() => !openMenu);
  }, [openMenu, setOpenMenu]);

  return (
    <_.Wrapper x={x} y={y} ref={ref}>
      <_.Div menu={openMenu} onClick={openMenu ? handleClick : null}>
        <_.Hover>
          <_.Dot onClick={handleClick} />
          <_.Dot onClick={handleClick} />
          <_.Dot onClick={handleClick} />
        </_.Hover>
      </_.Div>
    </_.Wrapper>
  );
}

export default WrapperControl;
