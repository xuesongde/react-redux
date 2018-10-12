redux other middleware redux-saga guideline
___actions
   this store our actions and action creators
___reducers
   define our user reducer (state) type and create an initial state for it
___selectors
   cache the state for us and we’ll recalculate only the parts of the state that have changed
___sagas
   Sagas’ll handle our logic and it’ll allow us to keep actions, At the bottom of sagas, there is a watcher saga watchGetUserStart(), which waits for the GET_USER_START action to be called (this action is usually called from some component or from different saga)
   The takeLatest saga effect will cancel the previous saga task (in our example handleGetUserStart) and start a new one—if the same action has been called multiple times.