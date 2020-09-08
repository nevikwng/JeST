import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



describe('addCount', () => {
    // 每一次測試後清除 fetchMock 的紀錄
    afterEach(() => {
        fetchMock.restore();
    });

    test('test actions', () => {
        const expectAction = {
            type: actions.ADD_COUNTER,
            payload: { addQuantity: 1, },
        };
        expect(actions.addCounter()).toEqual(expectAction);
    });

    test('get count dispatch of action', () => {
        // fetchMock 與 fetchCount() 內的請求網址相同
        fetchMock.getOnce('http://example.com/count', {
            body: { count: 3, },
        });

        // 創建 store
        const store = mockStore({ count: 0, });

        // 使用 store 用 fetchCount() 觸發 dispatch
        return store.dispatch(actions.fetchCount()).then(() => {
            // 這裡可以看到 dispatch 觸發了哪些事件
            console.log(store.getActions());
        });
    });
});