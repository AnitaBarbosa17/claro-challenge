import {
    ProgramBox,
    ProgramContent,
    ProgramFlex,
    ProgramStack,
    ProgramTitle,
    ProgramText,
    useProgram
} from "planby";

export const ProgramItem = ({ onMouseEnter, program, ...rest }) => {

    const {
        styles,
        formatTime,
        set12HoursTimeFormat,
    } = useProgram({
        program,
        ...rest
    });

    const { data } = program;
    const { title, since, till } = data;
    
    const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
    const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

    const handleOnMouseEnter = (event) => {
        onMouseEnter(program)
    };

    const customStyles = {   
        ...styles.position,    
        padding: 0
    }

    return (
        <div onMouseEnter={handleOnMouseEnter}>
            <ProgramBox width={styles.width} style={customStyles}>
                <ProgramContent width={styles.width} style={{borderRadius: 0}} className="border border-[#5c6168]">
                    <ProgramFlex>
                        <ProgramStack>
                            <ProgramTitle>{title}</ProgramTitle>
                            <ProgramText>
                                {sinceTime} - {tillTime}
                            </ProgramText>
                        </ProgramStack>
                    </ProgramFlex>
                </ProgramContent>
            </ProgramBox>
        </div>
    );
};
