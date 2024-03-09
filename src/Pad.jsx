import Styled from "styled-components";
import PropTypes from "prop-types";

const KeyPad = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  transition: background-color .3s ease;

  &:hover {
    background-color: rgb(96, 96, 96);
    cursor: pointer;
  }
  `;

const Pad = ({ id, value, onClicked }) => {
  return (
    <KeyPad id={id} onClick={onClicked}>
      {value}
    </KeyPad>
  );
};

Pad.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default Pad;
