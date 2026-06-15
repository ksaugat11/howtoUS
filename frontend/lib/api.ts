const BASE_URL = "http://localhost:8000/api";

export async function registerUser(data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  country: string;
}) {
  const res = await fetch(`${BASE_URL}/users/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${BASE_URL}/users/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function saveOnboarding(data: object, token: string) {
  const res = await fetch(`${BASE_URL}/users/onboarding/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}