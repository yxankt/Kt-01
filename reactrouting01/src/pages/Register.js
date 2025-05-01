
import { useNavigate, useLocation } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ปกติจะส่งข้อมูลไปยัง backend ที่นี่
    alert('สมัครสมาชิกสำเร็จ!');

    // เมื่อสมัครสำเร็จ ให้กลับไป path ก่อนหน้า หรือไป /login
    const redirectPath = location.state?.from?.pathname || '/login';
    navigate(redirectPath);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="ชื่อผู้ใช้" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="อีเมล" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="รหัสผ่าน" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="ยืนยันรหัสผ่าน" required />
          </div>
          <button type="submit" className="register-button">สมัครสมาชิก</button>
        </form>
        <p style={{ marginTop: '15px' }}>
          มีบัญชีอยู่แล้ว? <span onClick={() => navigate('/login')} style={{ color: '#2980b9', cursor: 'pointer' }}>เข้าสู่ระบบ</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
