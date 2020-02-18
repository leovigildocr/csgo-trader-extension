import React from "react";

import FlipSwitchStorage from "./Inputs/FlipSwitchStorage/FlipSwitchStorage";
import FlipSwitchPermission from "./Inputs/FlipSwitchPermission/FlipSwitchPermission";
import ModalTextBox from "./Inputs/ModalTextBox/ModalTextBox";
import ModalCustomComments from "./Inputs/ModalCustomComments/ModalCustomComments";
import SimpleSelect from "./Inputs/SimpleSelect/SimpleSelect";
import PricingProvider from "./Inputs/PricingProvider/PricingProvider";
import Refresh from "./Inputs/Refresh/Refresh";
import LinksToShow from "./Inputs/LinksToShow/LinksToShow";
import Backup from "./Inputs/Backup/Backup";
import Restore from "./Inputs/Restore/Restore";

import "./Row.css";

function typeSwitch(type, key, permission, origins, modalTitle, options) {
  switch (type) {
    case "flipSwitchStorage":
      return <FlipSwitchStorage id={key} />;
    case "modalTextBox":
      return <ModalTextBox id={key} modalTitle={modalTitle} />;
    case "modalCustomComments":
      return <ModalCustomComments id={key} modalTitle={modalTitle} />;
    case "flipSwitchPermission":
      return (
        <FlipSwitchPermission
          id={key}
          permission={permission}
          origins={origins}
        />
      );
    case "select":
      return <SimpleSelect id={key} options={options} />;
    case "pricingProvider":
      return <PricingProvider options={options} />;
    case "refresh":
      return <Refresh id={key} />;
    case "linksToShow":
      return <LinksToShow id={key} />;
    case "backup":
      return <Backup id={key} />;
    case "restore":
      return <Restore id={key} />;
    default:
      return null;
  }
}

const row = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="center">
        {typeSwitch(
          props.type,
          props.id,
          props.permission,
          props.origins,
          props.modalTitle,
          props.options
        )}
      </td>
      <td>{props.description}</td>
    </tr>
  );
};

export default row;
