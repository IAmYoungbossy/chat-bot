import Image from "next/image";

const ChatIcon = ({ imageURL }: { imageURL: string }) => {
  return (
    <Image
      width={48}
      height={48}
      src={imageURL}
      alt="chat bot icon"
    />
  );
};

export default ChatIcon;
