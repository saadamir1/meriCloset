// import Brand from "../entities/Brand";
// import { HStack, Icon } from "@chakra-ui/react";
// import {
//   FaWindows,
//   FaXbox,
//   FaPlaystation,
//   FaLinux,
//   FaApple,
//   FaAndroid,
// } from "react-icons/fa";

// import { MdPhoneIphone } from "react-icons/md";
// import { SiNintendo } from "react-icons/si";
// import { BsGlobe2 } from "react-icons/bs";
// import { IconType } from "react-icons";
// interface Props {
//   platforms: Brand[];
// }

// const BrandIconList = ({ platforms }: Props) => {
//   const iconMap: { [key: string]: IconType } = {
//     pc: FaWindows,
//     playstation: FaPlaystation,
//     xbox: FaXbox,
//     nintendo: SiNintendo,
//     mac: FaApple,
//     linux: FaLinux,
//     ios: MdPhoneIphone,
//     web: BsGlobe2,
//     andriod: FaAndroid,
//   };
//   return (
//     //we can also write exact pixel value e.g '10px'
//     <HStack margin={1}>
//       {platforms.map((platform) => (
//         <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
//       ))}
//     </HStack>
//   );
// };

// export default BrandIconList;
