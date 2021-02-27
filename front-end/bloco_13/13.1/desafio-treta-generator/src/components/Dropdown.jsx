import React, { useState } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";

function Dropdown(props) {
  const { chooseClick, arrayItems } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(!dropdownOpen)
  return (
    <>
      <Row>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Selecionar</DropdownToggle>
          <DropdownMenu>
            {arrayItems.map((item, i) => (
              <DropdownItem
                key={i}
                value={item}
                onClick={(e) => chooseClick(e.target.value)}
            >
              {item}
            </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </Row>
    </>
  );
}

export default Dropdown;
