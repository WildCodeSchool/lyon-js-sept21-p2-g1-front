import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import circle from '../assets/arroww.png';

function ModalBtn({ showModal, imgClass, name, parking }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={(showModal, open)}
      trigger={<img className={imgClass} src={circle} alt="circle" />}
    >
      <Modal.Content>
        <div className="bg-primary rounded-3xl shadow-2xl  h-96 w-11/12">
          <div className="picture__text  flex items-center flex-col">
            <h1 className="text-white text-center mb-5 p-5 font-fira">
              {name}
            </h1>
            <img src={parking} alt={name} />
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalBtn;
