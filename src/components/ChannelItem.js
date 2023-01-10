import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel }) => {
    
    const { position, logo, number } = channel;
    return (
        <ChannelBox {...position} className="gap-x-2">
            <div className="text-white font-poppins font-medium text-lg">{number}</div>
            <ChannelLogo
            src={logo}
            alt="Logo"
            style={{ maxHeight: 80, maxWidth: 80 }}
            />
        </ChannelBox>
    );
};
