import { Button } from "@material-ui/core";
import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import { baseUrl, config } from "../cutomHooks/Config";
import toastError from "../toast/toastError";
import toastSuccess from "../toast/toastSuccess";

const AddFriend = ({ fId }) => {
  const { user, setUser } = useContext(userContext);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const sent = user.invitations_users_id;
  const recieved = user.invitations_friend_id;

  const handleAddFriend = () => {
    setLoading(true);

    const waiting = sent.filter((r) => r.friend_id === fId && !r.confirmed);
    const pending = recieved.filter((r) => r.user_id === fId && !r.confirmed);
    //const unFriendR = recieved.filter((r) => r.user_id === fId && r.confirmed);
    //const unFriendS = sent.filter(
    //   (r) => r.friend_id === user.id && r.confirmed,
    // );
    if (waiting.length) {
      const delConfig = {
        method: "delete",
        url: `https://friends-app-strapi.herokuapp.com/invitations/${waiting[0].id}`,
        headers: {},
      };
      Axios(delConfig)
        .then(function (response) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...user,
              invitations_users_id: [
                ...user.invitations_users_id.filter((r) => r.friend_id !== fId),
              ],
            }),
          );
          setUser({
            ...user,
            invitations_users_id: [
              ...user.invitations_users_id.filter((r) => r.friend_id !== fId),
            ],
          });
          setLoading(false);
          toastSuccess("Canceled the Friend Request");
          setStatus(null);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
          toastError("can not cancel request try agian");
        });
    } else if (pending.length) {
      const acceptConfig = {
        ...config,
        url: `${baseUrl}invitations/${pending[0].id}`,
        method: "put",
        data: { confirmed: "true" },
      };
      Axios(acceptConfig)
        .then((response) => {
          setStatus("friends");
          setUser({
            ...user,
            invitations_friend_id: [
              ...recieved,
              { user_id: fId, friend_id: user.id, confirmed: true },
            ],
          });
          toastSuccess("successfully added friend");
          setLoading(false);
        })
        .catch((error) => {
          toastError("cant not accept request");
          setLoading(false);
        });
    }
    // else if (unFriendR.length) {
    //   console.log("unfriend");
    //   const delConfig = {
    //     method: "delete",
    //     url: `https://friends-app-strapi.herokuapp.com/invitations/${unFriendR[0].id}`,
    //     headers: {},
    //   };
    //   Axios(delConfig)
    //     .then(function (response) {
    //       localStorage.setItem(
    //         "user",
    //         JSON.stringify({
    //           ...user,
    //           invitations_users_id: [
    //             ...user.invitations_friend_id.filter(
    //               (r) => r.friend_id !== user.id,
    //             ),
    //           ],
    //         }),
    //       );
    //       setUser({
    //         ...user,
    //         invitations_users_id: [
    //           ...user.invitations_users_id.filter((r) => r.friend_id !== fId),
    //         ],
    //       });
    //       setLoading(false);
    //       toastSuccess("You Unfriended the user");
    //       setStatus(null);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       setLoading(false);
    //       toastError("can not unfriend try agian");
    //     });
    // } else if (unFriendS.length) {
    //   const delConfig = {
    //     method: "delete",
    //     url: `https://friends-app-strapi.herokuapp.com/invitations/${unFriendS[0].id}`,
    //     headers: {},
    //   };
    //   Axios(delConfig)
    //     .then(function (response) {
    //       localStorage.setItem(
    //         "user",
    //         JSON.stringify({
    //           ...user,
    //           invitations_users_id: [
    //             ...user.invitations_users_id.filter((r) => r.friend_id !== fId),
    //           ],
    //         }),
    //       );
    //       setUser({
    //         ...user,
    //         invitations_users_id: [
    //           ...user.invitations_users_id.filter((r) => r.friend_id !== fId),
    //         ],
    //       });
    //       setLoading(false);
    //       toastSuccess("You Unfriended the user");
    //       setStatus(null);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       setLoading(false);
    //       toastError("can not unfriend try agian");
    //     });
    else {
      const newConfig = {
        ...config,
        method: "post",
        url: `${baseUrl}invitations`,
        data: { user_id: user.id, friend_id: fId, confirmed: false },
      };
      Axios(newConfig)
        .then((response) => {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...user,
              invitations_users_id: [
                ...user.invitations_users_id,
                {
                  id: response.data.id,
                  user_id: user.id,
                  friend_id: fId,
                  confirmed: false,
                },
              ],
            }),
          );
          setUser({
            ...user,
            invitations_users_id: [
              ...user.invitations_users_id,
              {
                id: response.data.id,
                user_id: user.id,
                friend_id: fId,
                confirmed: false,
              },
            ],
          });
          setLoading(false);
          toastSuccess("Sent Friend Request");
          setStatus("pending");
        })
        .catch((error) => {
          setLoading(false);
          toastError("Cannot not add friend try again");
          setStatus(null);
        });
    }
  };

  useEffect(() => {
    user.invitations_users_id.forEach((r) => {
      if (r.friend_id === fId && r.confirmed) {
        setStatus("friends");
      } else if (r.friend_id === fId && !r.confirmed) {
        setStatus("pending");
      }
    });
    user.invitations_friend_id.forEach((r) => {
      if (r.user_id === fId && r.confirmed) {
        setStatus("friends");
      } else if (r.user_id === fId && !r.confirmed) {
        setStatus("pending");
      }
    });
  }, [user, fId]);

  if (loading) return <h3>loading</h3>;

  return (
    <Button
      style={{
        textDecoration: "none",
        color: "#F1E9DA",
        backgroundColor:
          status === "friends"
            ? "rgb(20,20,47)"
            : status === "pending"
            ? "#276531"
            : "#f50057",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #f50057",
        cursor: "pointer",
      }}
      onClick={() => handleAddFriend()}
      disabled={status === "friends"}
      dis
    >
      {status === "pending"
        ? "pending"
        : status === "friends"
        ? "Friends"
        : "Add Friend"}
    </Button>
  );
};
export default AddFriend;
