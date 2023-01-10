import {isEmpty} from '../helpers';
import close from '../assets/images/close.png'

const formatHours = (date) => {
    const splittedDate = date.toLocaleString().split(' ')[1].split(':').splice(0, 2)
    return `${splittedDate.join('.')}hs`
}

export const Header = ({ programData, handleShowEpgModal }) => {
    
    const {title, since, till, duration, description } = programData;
    
    const dateSince = since && formatHours(new Date(since));
    const dateTill = till && formatHours(new Date(till));
    const programDuration = duration && duration.split(':').splice(0,2);
    const programInfo = `${dateSince} a ${dateTill} ${duration ? `${programDuration[0]}h ${programDuration[1]}min` : ""}`;

    return (
        <div className="w-full h-[40vh] bg-[#0F0E0E] text-white px-[30px] py-[50px] relative">
            <div 
                className="absolute top-6 right-6 cursor-pointer transition-all hover:scale-[1.1]"
                onClick={handleShowEpgModal}
            >
                <img src={close} alt="Close button" />
            </div>
            {!isEmpty(programData) && <>
                <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-8">{title ? title : 'Sin titulo'}</h1>
                <h2 className="font-poppins text-md md:text-xl mb-2">{programInfo}</h2>
                <p className="font-poppins text-sm md:text-md mb-2">{description ? description : ''}</p>
            </>}
        </div>
    )
}

