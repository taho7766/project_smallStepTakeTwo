import React, { useRef, useEffect } from 'react';

function BlackHole() {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const ratio = window.innerHeight < 400 ? 0.6 : 1;
    const r = 80;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight * 0.5;
        const scale = ratio;
        ctx.transform(
            scale,
            0,
            0,
            -scale,
            canvas.width / 2,
            canvas.height / 2
        );

        for (var i = 0; i < 450; i++) {
            createParticle(particles.current);
        }

        function createParticle(particles) {
            particles.push({
                color:
                    Math.random() > 0.5
                        ? "rgba(255, 255, 255, 1"
                        : "rgba(225, 225, 225, 0.4",
                radius: Math.random() * 0.05,
                x: Math.cos(Math.random() * 7 + Math.PI) * r,
                y: Math.cos(Math.random() * 7 + Math.PI) * r,
                ring: Math.random() * r * 3,
                move: (Math.random() * 1 + 1) / 500,
                random: Math.random() * 7
            });
        }

        function moveParticle(p) {
            p.ring = Math.max(p.ring - 1, r);
            p.random += p.move;
            p.x = Math.cos(p.random + Math.PI) * p.ring;
            p.y = Math.sin(p.random + Math.PI) * p.ring; 
        }

        function resetParticle(p) {
            p.ring = Math.random() * r * 3;
            p.radius = Math.random() * 2;
        }

        function disappear(p) {
            if (p.radius < 0.8) resetParticle(p);
            p.radius *= 0.994
        }

        function draw(p) {
            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        function loop() {
            ctx.clearRect(
                -canvas.width,
                -canvas.height,
                canvas.width * 2,
                canvas.height * 2
            );

            for ( var i = 0; i < particles.current.length; i++) {
                disappear(particles.current[i]);
                moveParticle(particles.current[i]);
                draw(particles.current[i]);
            }
            requestAnimationFrame(loop);
        }
        loop();

        return() => {
            canvas.width = 0;
            canvas.height = 0;
        };

    }, [ratio]);

    return <canvas ref={canvasRef} style={{ width: '100%' }} />;
}

export default BlackHole;