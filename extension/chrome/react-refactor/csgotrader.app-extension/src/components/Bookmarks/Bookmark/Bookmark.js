import React, { useState } from "react";
import Countdown from "./Countdown";
import NewTabLink from "components/NewTabLink/NewTabLink";
import CustomModal from "components/CustomModal/CustomModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faChartLine,
    faTrash,
    faUser,
    faLink,
    faBell,
    faComment
} from "@fortawesome/free-solid-svg-icons";

const Bookmark = (props) => {
    console.log(props);
    const { itemInfo, notifTime, nofitType, notify, owner } = props.bookmarkData;
    const imageSRC = `https://steamcommunity.com/economy/image/${itemInfo.iconURL}/256x256`;
    const exterior = itemInfo.exterior ?  itemInfo.exterior.localized_name : '';
    const displayName = itemInfo.name.split('| ')[1] ? itemInfo.name.split('| ')[1] : itemInfo.name;

    const [comment, setComment] = useState(props.bookmarkData.comment);

    const commentChangeHandler = (event) => {
        setComment(event.target.value);
    };

    const saveComment = (closeModal) => {
        const bookmarkData = {...props.bookmarkData, comment: comment};
        props.editBookmark(bookmarkData);
        closeModal();
    };

    const removeBookmark = () => {
      props.removeBookmark(itemInfo.assetid);
    };

    return (
        <div className={`bookmark bookmark__${itemInfo.quality.name} col-xs-1`}>
            <h5 className='itemName' title={itemInfo.name}>{displayName}</h5>
            <span>{exterior}</span>
            <span className='STS'>
                <STS st={itemInfo.isStatrack} s={itemInfo.isSouvenir}/>
            </span>
            <img src={imageSRC} alt={itemInfo.name} title={itemInfo.name}/>
            <div className='actions'>
                <Action title='Inspect the item in-game'>
                    <NewTabLink to={itemInfo.inspectLink}>
                        <FontAwesomeIcon icon={faEye} />
                    </NewTabLink>
                </Action>
                <Action title='Open the market listings page of the item'>
                    <NewTabLink to={itemInfo.marketlink}>
                        <FontAwesomeIcon icon={faChartLine} />
                    </NewTabLink>
                </Action>
                <Action title={'View the item in the owner\'s inventory'}>
                    <NewTabLink to={`https://steamcommunity.com/profiles/${owner}/inventory/#730_2_${itemInfo.assetid}`}>
                        <FontAwesomeIcon icon={faLink} />
                    </NewTabLink>
                </Action>
                <Action title={'Open the owner\'s profile'}>
                    <NewTabLink to={`https://steamcommunity.com/profiles/${owner}`}>
                        <FontAwesomeIcon icon={faUser} />
                    </NewTabLink>
                </Action>
                <Action title='Add or edit a comment'>
                    <CustomModal modalTitle='Add your comment' opener={<FontAwesomeIcon icon={faComment} />} validator={saveComment}>
                        <input
                            className="custom-modal__input"
                            type="text"
                            placeholder="Type your comment here"
                            value={comment}
                            onChange={commentChangeHandler}
                        />
                    </CustomModal>
                </Action>
                <Action title='Edit notifications options'>
                    <FontAwesomeIcon icon={faBell} />
                </Action>
                <Action title='Delete bookmark'>
                    <FontAwesomeIcon icon={faTrash} onClick={removeBookmark}/>
                </Action>
                {/*{`${notifTime} ${nofitType} ${notify} ${owner}`}*/}
            </div>
            <div className='center'>
                <Tradability tradability={itemInfo.tradability}/>
            </div>
        </div>
    );
};

const Tradability = (props) => {
    const { tradability } = props;

    if (tradability === 'Tradable') {
        return (<span>{tradability}</span>);
    }
    else if (tradability === 'Not Tradable') {
        return (
            <div className='countdown'>
                Untradable
            </div>
        );
    }
    else {
        return (
            <Countdown tradability={tradability}/>
        );
    }
};

const Action = (props) => {
  return (
      <span className='action' title={props.title}>
          {props.children}
      </span>
  )
};

const STS = (props) => {
    if (props.st) {
        return (
            <span className='statTrak'>
                StatTrak™
            </span>
        );
    }
    else if (props.s) {
        return (
            <span className='souvenir'>
                Souvenir
            </span>
        );
    }
    else return null
};

export default Bookmark;
