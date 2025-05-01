
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    // ส่วนนี้คุณสามารถเชื่อมต่อกับ backend เพื่อเช็ค user ได้
    alert('เข้าสู่ระบบสำเร็จ!');

    // กลับไปยังหน้าที่มาก่อน (หรือไป /dashboard ถ้าไม่มี state)
    const redirectPath = location.state?.from?.pathname || '/dashboard';
    navigate(redirectPath);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="text" placeholder="ชื่อผู้ใช้" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="รหัสผ่าน" required />
          </div>
          <button type="submit" className="login-button">เข้าสู่ระบบ</button>
        </form>
        <p style={{ marginTop: '15px' }}>
          ยังไม่มีบัญชี? <span onClick={() => navigate('/register')} style={{ color: '#27ae60', cursor: 'pointer' }}>สมัครสมาชิก</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
