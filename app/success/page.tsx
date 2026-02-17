"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const note = searchParams.get("note");
  const total = searchParams.get("total");

  return (
    <div className="rm-success-wrapper">
      <div className="rm-success-box">
        <h1>✅ Order Placed Successfully!</h1>
        <p>Thank you for shopping with Royal Mart.</p>

        <div className="rm-success-info">
          <p><strong>Total Paid:</strong> ৳{total}</p>
          {note && (
            <p><strong>Your Note:</strong> {note}</p>
          )}
        </div>

        <Link href="/" className="rm-success-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
