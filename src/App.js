import { useState } from "react";
import "./index.css";
import { ModalEpg, ShowModalButton } from "./components";

function App() {
  
  const [showEpgModal, setShowEpgModal] = useState(false);
  const handleShowEpgModal = () => {
    setShowEpgModal(!showEpgModal)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen relative">
      <ShowModalButton handleShowEpgModal={handleShowEpgModal} />
      <ModalEpg showEpgModal={showEpgModal} handleShowEpgModal={handleShowEpgModal} />
    </div>
  );
}

export default App;