let pyodide = null;

export async function loadPyodideAndPackages() {
  if (!pyodide) {
    pyodide = await window.loadPyodide();
  }
  return pyodide;
}

export async function runPython(code) {
  const pyodide = await loadPyodideAndPackages();

  // Local variables to hold output per run
  let output = '';

  // Reset stdout and stderr
  pyodide.setStdout({
    batched: (msg) => {
      output += msg + '\n';
    }
  });

  pyodide.setStderr({
    batched: (msg) => {
      output += 'Error: ' + msg + '\n';
    }
  });

  try {
    await pyodide.runPythonAsync(code);
  } catch (err) {
    output += 'Execution Error: ' + err.toString();
  }

  return output.trim();
}
