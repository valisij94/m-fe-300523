
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../redux/slices/apiSlice';

export default function PostDetailPage() {

  const { postId } = useParams();
  const { data, isFetching, isError, error } = useGetPostByIdQuery(postId);

  return (
    <>
      {isFetching && 'Please, wait...'}
      { isError && <p>{error.error}</p> }
      { data && <div>
        <h1>Post Detail Page</h1>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
        <p>{`Post id: ${data.id}`}</p>
      </div>
      }
    </>
  )

}
