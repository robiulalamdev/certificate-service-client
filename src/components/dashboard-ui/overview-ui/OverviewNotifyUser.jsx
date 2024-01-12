/* eslint-disable react/prop-types */
import img1 from "../../../assets/images/dashboard/overview/profile.png";
import { useGetNotificationsQuery } from "../../../redux/features/notification/notificationApi";
import { iNotify } from "../../../utiles/icons";

const OverviewNotifyUser = ({ user }) => {
  const { data } = useGetNotificationsQuery();
  console.log(data);
  return (
    <>
      <div className="profile_part">
        <img src={img1} alt="" />
        <h1>{user?.full_name}</h1>
      </div>
      <div className="hr_div"></div>
      <div className="user_notify_header">
        <h1>Notifications</h1>
        <div className="">{iNotify}</div>
      </div>
      <div className="hr_div"></div>
      <div className="user_notifications">
        {data?.data?.map((item, index) => (
          <p key={index}>{item?.description}</p>
        ))}
      </div>
    </>
  );
};

export default OverviewNotifyUser;
