import React, { useContext, useEffect } from "react";
import Logo from "../../img/logo.png";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { UserCard } from "../component/usercard.js";
import { useHistory, Redirect } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<div className="h-100 container-fluid d-flex flex-column p-5">
			<div className="content justify-content-end ml-3 p-5">
				{`${store.user.username}` != "undefined" && <h3>Hello {`${store.user.username}`}</h3>}
				<img style={{ width: "12rem", height: "12.5rem" }} src={Logo} />
			</div>
		</div>
	);
};
