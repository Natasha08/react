import React from "react";
import TagList from "../components/tag-list";
import store from "../store";

export default class Tags extends React.Component {

	render() {
		return (
      <div>
        Tags Page

				<TagList />
      </div>
	  );
	}
}
