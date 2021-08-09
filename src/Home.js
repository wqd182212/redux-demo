import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import { handleChangeAction, handleAddAction, handleDeleteAction, getListAction } from './store/createAction';
import axios from 'axios';

function Home() {
    const [state, setState] = useState(store.getState());

    const changeInput = (e) => {
        store.dispatch(handleChangeAction(e.target.value));
    }

    const addItem = () => {
        store.dispatch(handleAddAction(state.inputValue));
    }

    const deleteItem = (index) => {
        store.dispatch(handleDeleteAction(index));
    }

    const storeChange = () => {
        setState(store.getState());
    }

    store.subscribe(storeChange);

    useEffect(() => {
        axios.get('https://www.fastmock.site/mock/0d18c7006c6dfdd1f3b1eb52a396f8a3/wqd/getList').then(res => {
            if (res.status === 200) {
                store.dispatch(getListAction(res.data.data.list));
            }
        });
    }, []);

    return (
        <div>
            <div>
                <Input
                    placeholder='请输入'
                    style={{ width: 160, margin: 10 }}
                    value={state.inputValue}
                    onChange={changeInput}>
                </Input>
                <Button type='primary' onClick={addItem}>add</Button>
            </div>
            <div>
                <List
                    bordered
                    style={{ width: 160, marginLeft: 10 }}
                    dataSource={state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
                    )}>
                </List>
            </div>
        </div>
    );
}

export default Home;