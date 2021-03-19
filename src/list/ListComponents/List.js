import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Alert, Button, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import "./List.css";
import classnames from "classnames";
import CreateList from './ListCreate';
// import Games from './GamesDisplay';
// import ListEdit from './ListEdit';
// import ListDelete from './ListDelete';

const List = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const [addList, setAddList] = useState(false);
    const [lists, setLists] = useState([])
    const [errForm, setErrForm] = useState("")
    

    const toggleTab = (tab) => {
        if(activeTab !== tab){
            setActiveTab(tab)
        }
    }

    const toggleId = (id) => {
        if(props.activeList !== id){
            props.setActiveList(id)
        }
    }

    const addOn = () => {
        setAddList(true);
    }

    // const getList = () => {
    //     let url = props.baseURL + '/list/:id'

    //     fetch(url,{
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         }),
    //     }).then((res) => res.json())
    //     .then((json) => {
    //         setLists(json);
    //         if (!addList){
    //             props.setActiveList(json[0].id)
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         setErrForm(err);
    //     })
    // }

    const reGetList = () => {
        let url = props.baseURL + '/list/:id';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
        }),
    })
    .then((res) => res.json())
    .then((json) => {
        setLists(json);
    })
    .catch(err => {
        console.log(err)
        setErrForm(err)
    })
}

    useEffect(() => {
        const getList = () => {
            let url = props.baseURL + '/list/:id'
    
            fetch(url,{
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.sessionToken
                }),
            }).then((res) => res.json())
            .then((json) => {
                setLists(json);
                if (!addList){
                    props.setActiveList(json[0].id)
                }
            })
            .catch(err => {
                console.log(err);
                setErrForm(err);
            })
        }
    }, [props.sessionToken])

    useEffect(() => {
    }, [props.activeList]);



    return(
        <div className='listStyle'>
            {errForm !== "" ? <Alert color="danger">{errForm}</Alert> : ""}
            <Nav tabs>
                {lists.length > 0 ? lists.map((lists, index) => {
                    return(
                        <NavItem key={index}>
                            <NavLink id="userList" className={classnames({active: activeTab === index})} index={index} onClick={() => {toggleTab(index); toggleId (lists.id)}}> {lists.title}</NavLink>
                        </NavItem>
                    )
                }) : "" }
                <NavItem>
                    <NavLink className = "addList" onClick={() => {addOn(); }}>
                        {(addList) ? <CreateList setAddList={setAddList} sessionToken={props.sessionToken} baseURL={props.baseURL} reGetList={reGetList}/> : null}
                        <img src="https://pngimage.net/wp-content/uploads/2018/05/add-button-png-5.png" alt="New List" width="30" height="30"/>
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent>
                <TabPane>
                    {/* {lists.length > 0 ? <Games baseURL={props.baseURL} sessionToken={props.sessionToken} activeList={props.activeList} listGamesUpdated={props.listGamesUpdated} setListGamesUpdated={props.setListGamesUpdated} /> 
                    :
                    <><img className="emptyGames" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="Add Games" />
                    <p className="emptyGames">Create a list to add games.</p>
                    </>
                } */}
                </TabPane>
            </TabContent>
        </div>
    )
}

export default List;