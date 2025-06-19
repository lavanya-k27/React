import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Terms & Condition</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin magna et velit faucibus, ac efficitur ligula pharetra. Ut
        ullamcorper pretium nulla, vitae maximus arcu malesuada non. Morbi quis
        est volutpat tellus bibendum accumsan in nec lorem. Quisque volutpat
        placerat nulla, nec fringilla odio sodales ullamcorper. Suspendisse
        faucibus lorem ut vehicula bibendum. Ut vitae hendrerit ipsum. Morbi
        tempus metus vel ex fringilla elementum. Suspendisse vel dui feugiat,
        viverra nisi elementum, rhoncus arcu. Nullam et venenatis ligula.
        Vivamus cursus metus non arcu aliquet, nec molestie felis elementum.
        Aliquam sed viverra ipsum. Phasellus eget tortor vestibulum, luctus dui
        et, finibus nibh. Cras laoreet placerat lorem non tincidunt. Proin
        maximus rutrum libero, eu pulvinar tellus tempor id.
      </p>
    </div>
  );
}

export default ModalPage;
