import { render, screen } from '@testing-library/react';
import App from './App';
import AddPostForm from './features/posts/AddPostForm'

test('It should show in the screen the title Add a New Post', () => {
  
render(<AddPostForm />);
expect(screen.getByText(/Add a New Post/i)).toBeInTheDocument();
});
