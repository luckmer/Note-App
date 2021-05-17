import { useContext } from "react";
import { StoreContext } from "../../utils/Store";
import FormData from "./Form";
import * as _ from "../../style/components/MenuOption";
import { useCallback } from "react";

const MenuOptions = () => {
  const { MENU, DRAFT, MOBILE } = useContext(StoreContext);
  const { X, Y, ControlYRadius, ControlXRadius, openMenu, setOpenMenu } = MENU;
  const { addNote, deleteNote, notes, windowWith } = DRAFT;
  const { mobile, setMobileD } = MOBILE;

  const handleClick = useCallback(
    () => setOpenMenu(() => !openMenu),
    [openMenu, setOpenMenu]
  );

  const handleDelete = useCallback(() => {
    deleteNote();
    handleClick();
  }, [deleteNote, handleClick]);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    setMobileD(!mobile);
  }, [mobile, openMenu, setMobileD, setOpenMenu]);

  return (
    <_.NavBar
      x={X}
      y={Y}
      RadiusA={ControlXRadius}
      RadiusB={ControlYRadius}
      Move={openMenu}
    >
      <_.Container RadiusA={ControlXRadius} RadiusB={ControlYRadius}>
        {openMenu && (
          <_.Header>
            <_.P onClick={handleClick}>X</_.P>
            <_.P onClick={handleDelete}>Delete</_.P>
            <_.Mobile onClick={() => handleMenu()} open={windowWith <= 772}>
              Open
            </_.Mobile>
          </_.Header>
        )}
        <_.BtnDiv>
          <_.ButtonStyle>
            <FormData
              notes={notes}
              handleClick={handleClick}
              addNote={addNote}
            />
          </_.ButtonStyle>
        </_.BtnDiv>
      </_.Container>
    </_.NavBar>
  );
};

export default MenuOptions;
