import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import { HANDLE_CHANGE, HANDLE_ADD, HANDLE_DELETE } from './store/action'

function Home() {
    const [state, setState] = useState(store.getState());

    const changeInput = (e) => {
        const action = {
            type: HANDLE_CHANGE,
            value: e.target.value
        };
        store.dispatch(action);
    }

    const addItem = () => {
        const action = {
            type: HANDLE_ADD,
            value: state.inputValue
        };
        store.dispatch(action);
    }

    const deleteItem = (index) => {
        const action = {
            type: HANDLE_DELETE,
            value: index
        };
        store.dispatch(action);
    }

    const storeChange = () => {
        setState(store.getState());
    }

    store.subscribe(storeChange);

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