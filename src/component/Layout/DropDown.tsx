import { styles } from "@/styles/styles";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { GrDocumentStore } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { TbSwitchVertical } from "react-icons/tb";
import { useRouter } from "next/navigation";

type Props = {
  setOpen: (open: boolean) => void;
  handleProfile: () => void;
};

const DropDown = ({ setOpen, handleProfile }: Props) => {
  const router = useRouter();
  const handleLogOut = async () => {
    router.push("/sign-in");
  };
  return (
    <Dropdown placeholder="bottom-start" className="bg-white">
      <DropdownTrigger>
        <Avatar
          src={"https://picsum.photos/200"}
          alt=""
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          onClick={() => {
            handleProfile();
            setOpen(false);
          }}
        >
          <div className="flex w-full items-center">
            <Avatar
              src={"https://picsum.photos/200"}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Profile
            </span>
          </div>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/my-orders"} className="flex w-full items-center">
            <GrDocumentStore className="text-[22px] ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              My Orders
            </span>
          </Link>
        </DropdownItem>
        <DropdownItem onClick={handleLogOut}>
          <div className="flex items-center w-full">
            <AiOutlineLogout className="text-2xl ml-2 text-black" />
            <span className={`${styles.label} text-black text-[16px] pl-2`}>
              Log out
            </span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
