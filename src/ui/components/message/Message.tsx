

const Message = ({notification}) => {
    
    return (
        <div className="toast-container position-fixed bottom-0 left-50 p-3">
              <h1 className="h-3"> {`${notification}`}</h1>
        </div>
    )
}

export default Message;