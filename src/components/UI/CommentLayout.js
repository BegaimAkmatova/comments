import './CommentLayout.css'

const CommentLayout = (props) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}
export default CommentLayout;