import {Modal} from "antd";
import React from "react";

const AppModal = ({setmodal, modal, children ,title,footer,width}) => {
  return (
    <Modal
      title={title}
      centered
      open={modal}
      onCancel={() => setmodal(false)}
      width={width}
      footer={footer}
      className='constant__text '
    >
      {children}
    </Modal>
  );
};

export default AppModal;
