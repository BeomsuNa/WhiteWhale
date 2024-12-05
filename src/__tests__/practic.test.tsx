import { signInWithEmailAndPassword } from 'firebase/auth';
import { render } from '@testing-library/react';
import Login from '../sections/Login/Login';
import { act } from 'react';

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

describe('Login Component', () => {
  const mockOnLoginSuccess = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Login이 되어 있는지 테스트', async () => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
      user: { uid: '123', email: 'test@google.com' },
    });

    await act(async () => {
      render(
        <Login
          email="test@google.com"
          passWord="password"
          onLoginSuccess={mockOnLoginSuccess}
        />,
      );
    });
    expect(mockOnLoginSuccess).toHaveBeenCalled();
  });
});
