import axios from 'axios';

interface VerificationResult {
	success: boolean; // 작업 성공 여부
	message?: string; // 선택적 메시지, 작업 실패 시 이유를 설명
}

export async function login(userId: string, password: string): Promise<string | undefined> {
	try {
		const response = await axios.post('/api/login', { userId, password });
		window.location.href = '/';
	} catch (error) {
		console.error('로그인 실패:', error.response?.data?.message);
		return error.response?.data?.message; // 실패 메시지 반환
	}
}

export async function signUp(nickname: string, userId: string, email: string, password: string): Promise<void> {
	try {
		await axios.post('/api/signup', { nickname, userId, email, password });
		window.location.href = "/Login";
	} catch (error) {
		console.error('회원가입 실패:', error);
	}
}

export const sendEmailVerification = async (email: string): Promise<VerificationResult> => {
	try {
		await axios.post('/api/sendVerification', { email });
		return { success: true };
	} catch (error) {
		console.error(`Error sending verification code: ${error}`);
		return { success: false, message: 'Failed to send verification code.' };
	}
};

export const verifyEmailCode = async (email: string, code: string): Promise<VerificationResult> => {
	try {
		await axios.post('/api/verifyCode', { email, code });
		return { success: true };
	} catch (error) {
		console.error(`Error verifying email code: ${error}`);
		return { success: false, message: 'Failed to verify email code.' };
	}
};

export async function findPassword(email: string): Promise<boolean> {
	try {
		const response = await axios.post('/api/findPassword', { email });
		return response.data.exists; // 가정: 응답에 'exists' 필드가 있고, 계정 존재 여부를 나타냅니다.
	} catch (error) {
		console.error('비밀번호 찾기 실패:', error);
		return false;
	}
}

export async function findId(email: string): Promise<string | null> {
	try {
		const response = await axios.post('/api/findId', { email });
		return response.data.id; // 가정: 응답에 'id' 필드가 있고, 사용자 ID를 나타냅니다.
	} catch (error) {
		console.error('ID 찾기 실패:', error);
		return null;
	}
}
