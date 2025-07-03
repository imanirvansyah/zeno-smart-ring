import { Canvas3D } from "@/components/sections/3d-section";

export const FollowUpSection = () => {
  return (
    <div className="follow_up">
      <h1 className="title">You’ve seen the vision. Now be part of it.</h1>
      <p>Zen O is coming — and this is your chance to lead the wearable revolution.</p>
      <div className="placeholder">
        <Canvas3D isRotating />
      </div>
    </div>
  )
}