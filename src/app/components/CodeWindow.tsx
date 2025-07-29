import { useState } from "react"
import { Button, Label } from "@visa/nova-react"
import { VisaCopyTiny } from "@visa/nova-icons-react"
import Image from "next/image"

const codeContent = `import React from 'react'
import { Button, Input, Label } from '@visa/nova-react'

export default function LoginForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 'var(--size-responsive-16)' }}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div style={{ marginBottom: 'var(--size-responsive-16)' }}>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <Button type="submit" alternate>
        Login
      </Button>
    </form>
  )
}`

export default function CodeWindow() {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <fieldset>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--size-responsive-16)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-responsive-8)",
          }}
        >
          <Label tag="legend" className="v-typography-headline-3">
            Generated Code
          </Label>
          <Image src="/react.svg" alt="React" width={24} height={24} />
        </div>

        <Button
          buttonSize="small"
          iconTwoColor
          onClick={handleCopyCode}
          style={{
            padding: "var(--size-responsive-18) var(--size-responsive-18)",
            fontSize: "var(--typography-button-large-font-size)",
          }}
        >
          <VisaCopyTiny />
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>

      <div
        style={{
          backgroundColor: "var(--palette-default-text-subtle)",
          borderRadius: "var(--size-rounded-medium)",
          padding: "var(--size-responsive-20)",
          height: "80vh",
          overflow: "auto",
        }}
      >
        <pre
          style={{
            color: "var(--palette-default-surface-1)",
            fontFamily: "monospace",
            fontSize: "var(--typography-body-2-font-size)",
            lineHeight: "var(--typography-body-2-line-height)",
            whiteSpace: "pre-wrap",
            margin: 0,
          }}
        >
          {codeContent}
        </pre>
      </div>
    </fieldset>
  )
}
