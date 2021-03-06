import { renderHook, act } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "./auth";
import { mocked } from "ts-jest/utils";
import { logInAsync } from "expo-google-app-auth";
//mock auth by google with jest
jest.mock("expo-google-app-auth");

describe("Auth Hook", () => {
  it("should be able to sign in with existing google account", async () => {
    const googleMocked = mocked(logInAsync as any);
    // if is the only mock on test, it will be used by ALL other tests
    /** 
     therefore, each test should have its own mock definition to not be influenced
     by only one place
    */
    googleMocked.mockReturnValue({
      type: "success",
      user: {
        id: "any",
        email: "w0ken0ne@gmail.com",
        name: "Willian S.",
        photoURL: "any_photo",
      },
    });
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    //calling hook functions should use a ACT method
    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).toBeTruthy();
    // expect email to be equal to w0ken0ne@gmail.com
    expect(result.current.user.email).toEqual("w0ken0ne@gmail.com");
  });
  // user should not be authenticate if he cancels dialog
  it("should not be able to sign in with google account", async () => {
    const cancelMocked = mocked(logInAsync as any);
    cancelMocked.mockReturnValue({
      type: "cancel",
      user: {},
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).not.toHaveProperty("id");
  });
});
