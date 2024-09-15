import Image from "next/image";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
  }

const UserCard = ({ id, name, username, imgUrl, personType }: Props) => {
  return (
    <article className="user-card">
        <div className='user-card_avatar'>
            <div className='relative h-12 w-12'>
                <Image
                    src={imgUrl}
                    alt='user_logo'
                    fill
                    className='rounded-full object-cover'
                />
            </div>
        </div>
    </article>
  )
};

export default UserCard;
