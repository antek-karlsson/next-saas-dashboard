'use client';

import AppButton from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import { Google, GitHub } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(watch('email'));
  console.log(watch('password'));

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <div className="flex flex-col gap-4 max-w-2xs bg-white p-8 rounded-2xl border border-gray-200">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <h2 className="text-sm text-gray-500">
            Sign in to your account to continue
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <TextInput
              name="email"
              label="Email"
              type="text"
              placeholder="Email"
              required
              register={register}
              error={errors.email}
            />
            <TextInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
              register={register}
              error={errors.password}
            />
            <AppButton variant="solid" size="default">
              Sign in
            </AppButton>
          </form>

          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <AppButton variant="outline" size="default">
            <Google fontSize="inherit" /> Continue with Google
          </AppButton>
          <AppButton variant="outline" size="default">
            <GitHub fontSize="inherit" /> Continue with GitHub
          </AppButton>
        </div>
      </div>
    </main>
  );
}
