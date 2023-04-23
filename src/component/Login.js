import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileNumber, sendOtp, verifyOtp } from '../store/userSlice';

function Login() {
  const dispatch = useDispatch();
  const { mobileNumber, token } = useSelector((state) => state.user);
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    dispatch(sendOtp(mobileNumber));
  };

  const handleLogin = () => {
    dispatch(verifyOtp({ mobileNumber, otp }));
  };

  return (
    <div>
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => dispatch(setMobileNumber(e.target.value))}
        placeholder="Enter your mobile number"
      />
      <button onClick={handleSendOtp}>Send OTP</button>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
