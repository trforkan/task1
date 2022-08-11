export interface login {
  userName: string | null,
  password: string | null,
};

export interface formInfo {
  title: string | null,
  description: string | null
};


export interface multiChoiceOptions {
  title: formInfo | null,
  quesType: string | null,
  ques: string | null,
  options: string []
};


export interface adminUser {

  name: string | null,
  email: string | null,
  role: string | null,
  lastLogin: string | null,
  status: boolean | null
}


