import { useState } from 'react';
import { Epg, Layout } from "planby";
import { useApp } from "../useApp";
import { Timeline, ChannelItem, ProgramItem, Header } from "./index";

export const ModalEpg = ({showEpgModal, handleShowEpgModal}) => {
    const { isLoading, getEpgProps, getLayoutProps } = useApp();
    const [programData, setProgramData] = useState({});

    const handleMouseEnter = ({data}) => {
        setProgramData(data);
    }

    return (
        <div style={showEpgModal ? {opacity: 1, zIndex: 999} : {opacity: 0, zIndex: -1}}>
            <div className="fixed inset-0 w-full h-full">
                <Header programData={programData} handleShowEpgModal={handleShowEpgModal} />
                <div className="w-full h-[60vh] relative">
                    <p className="absolute left-[65px] top-[20px] z-[99] text-white font-poppins font-medium">Hoy</p>
                    <Epg isLoading={isLoading} style={{padding: 0}} {...getEpgProps()}>
                    <Layout
                        {...getLayoutProps()}
                        renderTimeline={(props) => <Timeline {...props} />}
                        renderProgram={({ program, ...rest }) => {
                        return (
                            <ProgramItem
                            key={program.data.id}
                            program={program}
                            onMouseEnter={handleMouseEnter}
                            {...rest}
                            />
                        );
                        }}
                        renderChannel={({ channel }) => (
                        <ChannelItem key={channel.uuid} channel={channel} />
                        )}
                    />
                    </Epg>
                </div>
            </div>
        </div>
    )
}