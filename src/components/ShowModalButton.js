import React from 'react'

export const ShowModalButton = ({handleShowEpgModal}) => {
  return (
    <button 
        type="button" 
        onClick={handleShowEpgModal} 
        className="bg-[#ac0000] text-white py-4 px-10 rounded-md font-poppins font-bold text-lg transition-all hover:bg-[#a00000] hover:shadow-md hover:-translate-y-1"
        >
        Mostrar EPG 
    </button>
  )
}
