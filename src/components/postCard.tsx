import * as React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
} from "@material-ui/core";
import Alert, {AlertProps} from '@material-ui/lab/Alert';
import {client} from "../api/client";

type Feedback = Required<Pick<AlertProps, "severity">> & {
	message: string
};

export interface Post {
	title: string,
	body: string,
}

const PostCard: React.FC = () => {
	const [post, setPost] = React.useState<Post>()
	const [loading, setLoading] = React.useState<boolean>(true);
	const [feedback, setFeedback] = React.useState<Feedback>();

	const loadPost = async () => {
		try {
			const {data: post} = await client.get<Post>('/posts/1');
			setPost(post);
			setFeedback({
				severity: "success",
				message: "Post encontrado",
			});
		}catch (error) {
			if(error.request){
				const { status } = error.request;
				switch ( status ) {
					case 500:
						setFeedback({
							severity: "error",
							message: "Erro interno",
						});
						break;
					case 404:
						setFeedback({
							severity: "warning",
							message: "O post informado não foi encontrado",
						});
						break;
				}
			}
		}
	}

	React.useEffect(() => {
		loadPost()
      .finally(() => {
        setLoading(false)
      });
	}, [])

	return (
		<>
			{ feedback &&
				<Box mb={2} clone>
					<Alert severity={feedback.severity}>
						{feedback.message}
					</Alert>
                </Box>
			}
			{ loading && <CircularProgress color="inherit" /> }
			{ !loading &&
				<Card variant="outlined">
					<CardHeader title={post?.title}/>
					<CardContent>{post?.body}</CardContent>
				</Card>
			}
		</>
	);
};

export { PostCard };
