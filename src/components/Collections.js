import { React } from "react";
import Cards from "./Cards";
import Loader from "./Loader";

function Collections({ onScroll, listInnerRef, userList, loading }) {
  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {userList && userList.length > 0 && (
        <div
          className="collections-container"
          style={{ marginBottom: loading ? "80px" : "" }}
        >
          {userList.map((item, index) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default Collections;
